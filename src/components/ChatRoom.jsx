import React, { useState, useEffect, useRef } from 'react';
import { auth, db, serverTimestamp } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null);
    const messagesEndRef = useRef(null);

    const provider = new GoogleAuthProvider();

    // Handle login dengan Google
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error('Error saat login:', error);
            alert(`Login gagal: ${error.message}`);
        }
    };

    // Handle logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error saat logout:', error);
        }
    };

    // Handle kirim pesan
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        try {
            await addDoc(collection(db, 'chatMessages'), {
                text: newMessage,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: serverTimestamp(),
                uid: user.uid
            });
            setNewMessage('');
        } catch (error) {
            console.error('Error mengirim pesan:', error);
        }
    };

    // Scroll ke bawah saat ada pesan baru
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Subscribe ke perubahan data chat
    useEffect(() => {
        const q = query(collection(db, 'chatMessages'), orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messagesData = [];
            querySnapshot.forEach((doc) => {
                messagesData.push({ id: doc.id, ...doc.data() });
            });
            setMessages(messagesData);
        });

        return () => unsubscribe();
    }, []);

    // Listen perubahan status auth
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat bubble toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
            >
                {isOpen ? (
                    <i className="ri-close-line text-xl"></i>
                ) : (
                    <i className="ri-message-2-line text-xl"></i>
                )}
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-[28rem] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
                    {/* Header */}
                    <div className="bg-blue-500 text-white p-2 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center gap-0">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer rounded-lg p-1.5" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                            <h3 className="font-semibold">Chat Room</h3>
                        </div>
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <button
                                    onClick={handleLogout}
                                    className="text-xs bg-white text-blue-500 px-2 py-1 rounded hover:bg-blue-50 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : null}
                    </div>

                    {/* Messages area */}
                    <div className="flex-1 p-3 overflow-y-auto scrollbar-hide">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`mb-3 flex ${message.uid === user?.uid ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-xs ${message.uid === user?.uid ? 'ml-8' : 'mr-8'}`}>
                                    {message.uid !== user?.uid && (
                                        <div className="flex items-center mb-1">
                                            <img
                                                src={message.photoURL}
                                                alt={message.displayName}
                                                className="w-5 h-5 rounded-full mr-2 object-cover"
                                            />
                                            <span className="text-xs font-semibold text-gray-700">
                                                {message.displayName}
                                            </span>
                                        </div>
                                    )}

                                    <div
                                        className={`p-2 rounded-lg ${message.uid === user?.uid
                                            ? 'bg-blue-500 text-white rounded-br-none'
                                            : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                                    >
                                        {message.text}
                                    </div>

                                    <div className={`text-[10px] text-gray-500 mt-1 ${message.uid === user?.uid ? 'text-right' : 'text-left'}`}>
                                        {message.createdAt?.toDate()?.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input area */}
                    <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                        {user ? (
                            <form onSubmit={handleSendMessage} className="flex space-x-2">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.value)}
                                    placeholder="Ketik pesan..."
                                    className="flex-1 border border-gray-300 bg-white text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
                                >
                                    <i className="ri-send-plane-fill text-lg"></i>
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                            >
                                <i className="ri-google-fill text-blue-500 text-lg"></i>
                                <span className="text-sm">Login dengan Google untuk chat</span>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* CSS untuk hide scrollbar */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}