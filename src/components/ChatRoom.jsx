import React, { useState, useEffect, useRef } from 'react';
import { auth, db, serverTimestamp } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { RiMessage2Line, RiCloseLine, RiSendPlaneFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

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
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiMessage2Line size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat Room</h3>
            {user ? (
              <div className="flex items-center space-x-2">
                <img 
                  src={user.photoURL} 
                  alt={user.displayName} 
                  className="w-6 h-6 rounded-full"
                />
                <button 
                  onClick={handleLogout}
                  className="text-xs bg-white text-blue-500 px-2 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>

          {/* Messages area */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.uid === user?.uid ? 'text-right' : ''}`}
              >
                <div className="flex items-start space-x-2">
                  {message.uid !== user?.uid && (
                    <img 
                      src={message.photoURL} 
                      alt={message.displayName} 
                      className="w-6 h-6 rounded-full mt-1"
                    />
                  )}
                  <div>
                    {message.uid !== user?.uid && (
                      <p className="text-xs font-semibold">{message.displayName}</p>
                    )}
                    <div 
                      className={`inline-block p-2 rounded-lg ${message.uid === user?.uid ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                      {message.text}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.createdAt?.toDate()?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t">
            {user ? (
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ketik pesan..."
                  className="flex-1 border bg-white text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  <RiSendPlaneFill size={18} />
                </button>
              </form>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
              >
                <FcGoogle size={20} />
                <span>Login dengan Google untuk chat</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}