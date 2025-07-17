import React, { useState, useEffect, useRef } from 'react';
import { auth, db, serverTimestamp } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function ChatRoomComponents() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [replyingTo, setReplyingTo] = useState(null);
    const [unreadCount, setUnreadCount] = useState(0);
    const [lastSeenIndex, setLastSeenIndex] = useState(0);
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    const provider = new GoogleAuthProvider();
    const OWNER_UID = "r28jzkoDUaUoguZoQI7frNe4w5N2";

    // Handle login dengan Google
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            // Reset unread count when user opens chat
            setUnreadCount(0);
            setLastSeenIndex(messages.length);
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
            setReplyingTo(null);
        } catch (error) {
            console.error('Error saat logout:', error);
        }
    };

    // Handle kirim pesan
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        try {
            const messageData = {
                text: newMessage,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: serverTimestamp(),
                uid: user.uid,
                isOwner: user.uid === OWNER_UID
            };

            if (replyingTo) {
                messageData.replyTo = {
                    id: replyingTo.id,
                    text: replyingTo.text,
                    displayName: replyingTo.displayName
                };
            }

            await addDoc(collection(db, 'chatMessages'), messageData);
            setNewMessage('');
            setReplyingTo(null);
        } catch (error) {
            console.error('Error mengirim pesan:', error);
        }
    };

    // Scroll ke bawah saat ada pesan baru
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Format tanggal sesuai permintaan (7/18/2025, 2:21:35 AM)
    const formatDate = (date) => {
        if (!date) return '';
        
        const options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        return date.toLocaleString('en-US', options);
    };

    // Handle buka chat
    const handleOpenChat = () => {
        setIsOpen(true);
        setUnreadCount(0);
        setLastSeenIndex(messages.length);
    };

    // Handle tutup chat
    const handleCloseChat = () => {
        setIsOpen(false);
        setLastSeenIndex(messages.length);
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        } else {
            // Hitung unread messages saat chat tertutup
            if (messages.length > lastSeenIndex) {
                setUnreadCount(messages.length - lastSeenIndex);
            }
        }
    }, [messages, isOpen]);

    // Subscribe ke perubahan data chat
    useEffect(() => {
        const q = query(collection(db, 'chatMessages'), orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messagesData = [];
            querySnapshot.forEach((doc) => {
                messagesData.push({ 
                    id: doc.id, 
                    ...doc.data(),
                    // Convert Firestore timestamp to Date object
                    createdAt: doc.data().createdAt?.toDate() 
                });
            });
            setMessages(messagesData);
        });

        return () => unsubscribe();
    }, []);

    // Listen perubahan status auth
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                setLastSeenIndex(messages.length);
                setUnreadCount(0);
            }
        });

        return () => unsubscribe();
    }, [messages.length]);

    const handleReply = (message) => {
        setReplyingTo(message);
        scrollToBottom();
    };

    const cancelReply = () => {
        setReplyingTo(null);
    };

    return (
        <div className="fixed bottom-[70px] md:bottom-6 right-6 z-50">
            {/* Chat bubble toggle dengan notifikasi */}
            <div className="relative">
                <button
                    onClick={isOpen ? handleCloseChat : handleOpenChat}
                    className="w-10 h-10 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all flex items-center justify-center relative"
                >
                    {isOpen ? (
                        <i className="ri-close-line text-md"></i>
                    ) : (
                        <i className="ri-message-2-line text-md"></i>
                    )}
                    {unreadCount > 0 && !isOpen && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Chat window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[350px] h-[28rem] bg-white/60 backdrop-blur-sm rounded-lg shadow-xl flex flex-col border border-gray-200 transition-all duration-300">
                    {/* Header */}
                    <div className="bg-white/80 backdrop-blur-md text-black p-2 rounded-t-lg flex justify-between items-center border-b border-gray-200">
                        <div className="flex items-center gap-1.5">
                            <Link to="/chat">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cursor-pointer rounded-lg p-1.5"
                                height="27"
                                width="27"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="4 14 10 14 10 20"></polyline>
                                <polyline points="20 10 14 10 14 4"></polyline>
                                <line x1="14" y1="10" x2="21" y2="3"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                            </Link>
                            <h3 className="font-semibold text-sm">Chat Room</h3>
                        </div>

                        {user && (
                            <div className="relative flex items-center space-x-2">
                                {/* Foto profil */}
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-6 h-6 rounded-full object-cover"
                                />

                                {/* Icon titik tiga */}
                                <button
                                    onClick={() => setShowMenu((prev) => !prev)}
                                    className="text-gray-600 hover:text-black text-lg"
                                >
                                    <i className="ri-more-2-fill"></i>
                                </button>

                                {/* Dropdown menu */}
                                {showMenu && (
                                    <div className="absolute right-0 top-8 bg-white shadow-md rounded-md z-10">
                                        <button
                                            onClick={handleLogout}
                                            className="text-sm text-red-600 hover:bg-red-50 px-4 py-2 w-full text-left"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Messages area */}
                    <div 
                        ref={messagesContainerRef}
                        className="flex-1 p-4 overflow-y-auto scrollbar-hide"
                        onScroll={() => {
                            // Update last seen index ketika user scroll
                            if (messagesContainerRef.current) {
                                const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
                                if (scrollTop + clientHeight >= scrollHeight - 50) {
                                    setLastSeenIndex(messages.length);
                                }
                            }
                        }}
                    >
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
                                                {message.isOwner && (
                                                    <span className="ml-1 bg-gray-500 text-white text-[9px] px-1 py-0.5 rounded">
                                                        Author
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    )}

                                    {/* Reply preview */}
                                    {message.replyTo && (
                                        <div className={`bg-gray-100/70 text-gray-600 text-xs p-2 mb-1 rounded border-l-2 ${message.uid === user?.uid ? 'border-gray-500' : 'border-gray-400'}`}>
                                            <div className="font-semibold">
                                                {message.replyTo.displayName}
                                            </div>
                                            <div className="truncate">
                                                {message.replyTo.text}
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className={`p-2 rounded-lg text-sm ${message.uid === user?.uid
                                            ? 'bg-gray-600 text-white rounded-br-none'
                                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        {message.text}
                                    </div>

                                    <div className="flex items-center justify-between mt-1">
                                        <div
                                            className={`text-[9px] text-gray-600 ${message.uid === user?.uid ? 'text-right' : 'text-left'
                                                }`}
                                        >
                                            {formatDate(message.createdAt)}
                                        </div>
                                        {message.uid !== user?.uid && (
                                            <button
                                                onClick={() => handleReply(message)}
                                                className="text-gray-400 hover:text-gray-600 text-xs ml-2"
                                                title="Reply"
                                            >
                                                <i className="ri-reply-all-fill"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Reply indicator */}
                    {replyingTo && (
                        <div className="bg-gray-100/80 border-t border-gray-200 px-3 py-2 flex justify-between items-center">
                            <div className="text-xs text-gray-600">
                                Replying to <span className="font-semibold">{replyingTo.displayName}</span>
                            </div>
                            <button
                                onClick={cancelReply}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    )}

                    {/* Input area */}
                    <div className="p-3 border-t border-gray-200 bg-white/80 backdrop-blur-md rounded-b-lg">
                        {user ? (
                            <form onSubmit={handleSendMessage} className="flex space-x-2">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder={replyingTo ? `Reply to ${replyingTo.displayName}...` : "Ketik pesan..."}
                                    className="flex-1 border border-gray-300 bg-white text-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition flex items-center justify-center"
                                >
                                    <i className="ri-send-plane-fill"></i>
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                            >
                                <i className="ri-google-fill text-blue-600 text-lg"></i>
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