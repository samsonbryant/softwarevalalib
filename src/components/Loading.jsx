import React from 'react';

const Loading = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div 
          className="loading-spinner"
          style={{
            width: '64px',
            height: '64px',
            border: '3px solid #e5e7eb',
            borderTop: '3px solid #3b82f6',
            borderRadius: '50%',
            margin: '0 auto 1rem auto'
          }}
        ></div>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Loading...
        </h2>
        <p style={{
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          Please wait while we load the content
        </p>
      </div>
    </div>
  );
};

export default Loading;
