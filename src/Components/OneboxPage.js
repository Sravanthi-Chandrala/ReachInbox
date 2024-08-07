import React, { useState } from 'react';
import { Home, Users, Inbox, Send, List, PieChart, Sun, Moon, Mail, RotateCw } from 'lucide-react';
import './CSS/OneboxPage.css';
import logo11 from './Assets/Logo11.png';
import './CSS/EmailViewer.css';
import './CSS/LeadDetailsSidebar.css';
import './CSS/PopUp.css';
import './CSS/ConformationPopup.css';
import mailopen from './Assets/mailopen.png';
import './CSS/Homepage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



// Static inbox data
const staticInboxData = {
  "status": 200,
  "data": [
    {
      "id": 3,
      "fromName": "Shaw Adley",
      "fromEmail": "shaw@getmemeetings.com",
      "toName": "",
      "toEmail": "mitrajit2022@gmail.com",
      "cc": null,
      "bcc": null,
      "threadId": 1,
      "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      "body": "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      "isRead": true,
      "folder": "INBOX",
      "uid": 594,
      "sentAt": "2023-11-23T04:08:45.000Z",
      "archivedAt": null,
      "createdAt": "2023-11-23T07:38:46.000Z",
      "updatedAt": "2023-11-23T07:38:46.000Z",
      "deletedAt": null
    },
    {
      "id": 4,
      "fromName": "Shaw Adley",
      "fromEmail": "shaw@getmemeetings.com",
      "toName": "",
      "toEmail": "mitrajit2022@gmail.com",
      "cc": null,
      "bcc": null,
      "threadId": 2,
      "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "subject": "Test mail",
      "body": "<p>Test mail</p>",
      "isRead": true,
      "folder": "INBOX",
      "uid": 594,
      "sentAt": "2023-11-23T04:08:45.000Z",
      "archivedAt": null,
      "createdAt": "2023-11-23T07:38:46.000Z",
      "updatedAt": "2023-11-23T07:38:46.000Z",
      "deletedAt": null
    },
        {
          "id": 2,
          "fromName": "Mitrajit Chandra",
          "fromEmail": "mitrajit2022@gmail.com",
          "toName": "",
          "toEmail": "shaw@getmemeetings.com",
          "cc": null,
          "bcc": null,
          "threadId": 1,
          "messageId": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          "inReplyTo": null,
          "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
          "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
          "body": "<p>How are you Shaw?</p><p>Thanks for reaching out over our web chat.</p><p>How can I help you with your project?</p><p>Please let me know if you need anything else.</p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>",
          "isRead": true,
          "folder": "INBOX",
          "uid": 52,
          "sentAt": "2023-11-21T00:39:19.000Z",
          "archivedAt": null,
          "createdAt": "2023-11-23T07:38:46.000Z",
          "updatedAt": "2023-11-23T07:38:46.000Z",
          "deletedAt": null
        },
   
      ]

};

const OneboxPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeView, setActiveView] = useState('inbox');
  const [inboxData, setInboxData] = useState(staticInboxData.data);
  const [showContentShower, setShowContentShower] = useState(false);
  const [showReplyPopup, setShowReplyPopup] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };
  function OnboxPage() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login');
      }
    }, [navigate]);
  };
   const handleEmailClick = () => {
    setShowContentShower(true);
  };

  const refreshInbox = () => {
    
    console.log("Refreshing inbox...");
  };
  

  return (
    <div className={`onebox-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
     
      <div className="sidebar">
        <img src={logo11} alt='reachinbox-logo' className='logo11' />
        <SidebarIcon Icon={Home} onClick={() => setActiveView('home')} />
        <SidebarIcon Icon={Users} onClick={() => setActiveView('users')} />
        <SidebarIcon Icon={Mail} onClick={() => setActiveView('mail')} />
        <SidebarIcon Icon={Send} onClick={() => setActiveView('send')} />
        <SidebarIcon Icon={List} onClick={() => setActiveView('list')} />
        <SidebarIcon Icon={Inbox} onClick={() => setActiveView('inbox')} />
        <SidebarIcon Icon={PieChart} onClick={() => setActiveView('piechart')} />
        <div className='profile'>
          <div className='profile-logo'>
            CS
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <nav className="top-nav">
          <h1 className="logo">Onebox</h1>
          <div className="nav-controls">
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="status-indicator"></div>
            <span className="workspace-name">Sravanthi's Workspace <i className="fa-solid fa-angle-down"></i></span>
          </div>
        </nav>

        {/* Content Area */}
        <div className="content-area">
          {activeView === 'home' && <Homepage/>}
          {activeView === 'users' && <Homepage/>}
          {activeView === 'mail' && <Homepage/>}
          {activeView === 'send' && <Homepage/>}
          {activeView === 'list' && <Homepage/>}
          {activeView === 'piechart' && <Homepage/>}
          {activeView === 'inbox' && <InboxContent inboxData={inboxData} refreshInbox={refreshInbox} />}
          {activeView === 'inbox' && <EmailViewer inboxData={inboxData} refreshInbox={refreshInbox} />}
          {activeView === 'inbox' && <LeadDetailsSidebar inboxData={inboxData} refreshInbox={refreshInbox} />}
          {/* Other view components */}
        </div>
      </div>
    </div>
  );
};
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <div className="icon-container">
          <img src={mailopen} alt="Email icon" className="icon-mailopened" />
        </div>
        <h1 className="title">It's the beginning of a legendary sales pipeline</h1>
        <p className="subtitle-12">When you have inbound E-mails<br></br> you'll see them here</p>
      </div>
    </div>
  );
};

const SidebarIcon = ({ Icon, onClick }) => (
  <div className="sidebar-icon" onClick={onClick}>
    <Icon size={24} />
  </div>
);

const InboxContent = ({ inboxData, refreshInbox }) => {
  const [isReplyPopupVisible, setIsReplyPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);

  const handleSearchInput = (event) => {
    const value = event.target.value.toLowerCase();

    if (value.includes('r')) {
      setIsReplyPopupVisible(true);
      setIsDeletePopupVisible(false);
    } else if (value.includes('d')) {
      setIsDeletePopupVisible(true);
      setIsReplyPopupVisible(false);
    } else {
      setIsReplyPopupVisible(false);
      setIsDeletePopupVisible(false);
    }
  };

  return (
    <div className="inbox-content">
      <div className="top-content">
        <h2>
          All Inbox(s) <i className="fa-solid fa-angle-down"></i><br />
          ({inboxData.length}/25 inboxes selected)
        </h2>
        <button onClick={refreshInbox} className="rotate-icon">
          <RotateCw size={20} />
        </button>
      </div>
      <div className="inbox-toolbar">
        <span className="new-replies">2 New Replies</span>
        <span className="sort-options">Newest <i className="fa-solid fa-angle-down"></i></span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={handleSearchInput} />
      </div>

      <div className="inbox-list">
        {inboxData.map((email) => (
          <div key={email.id} className="email-item">
            <div className="email-header">
              <span className="email-address">{email.fromName} &lt;{email.fromEmail}&gt;</span>
              <span className="email-date">{new Date(email.sentAt).toLocaleDateString()}</span>
            </div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-tags">
              <span className={`tag ${email.isRead ? 'interested' : 'campaign read'}`}>
                {email.isRead ? 'interested' : 'campaign read'}
              </span>
              <span className="tag folder">{email.folder}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="inbox-list">
        {inboxData.map((email) => (
          <div key={email.id} className="email-item">
            <div className="email-header">
              <span className="email-address">{email.fromName} &lt;{email.fromEmail}&gt;</span>
              <span className="email-date">{new Date(email.sentAt).toLocaleDateString()}</span>
            </div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-tags">
              <span className={`tag ${email.isRead ? 'interested' : 'campaign read'}`}>
                {email.isRead ? 'interested' : 'campaign read'}
              </span>
              <span className="tag folder">{email.folder}</span>
            </div>
          </div>
        ))}
      </div>

      <ReplyPopup isVisible={isReplyPopupVisible} onClose={() => setIsReplyPopupVisible(false)} />
      <DeletePopup 
        isVisible={isDeletePopupVisible} 
        onClose={() => setIsDeletePopupVisible(false)} 
        onDelete={() => {
          // Handle delete action
          setIsDeletePopupVisible(false);
        }} 
      />
    </div>
  );
};
const EmailViewer = () => {
  const [theme, setTheme] = useState('dark');
  const [showReplyPopup, setShowReplyPopup] = useState(false);

  const toggleReplyPopup = () => {
    setShowReplyPopup(!showReplyPopup);
  };

  return (
    <div className={`email-viewer ${theme}`}>
      <div className="header-section">
        <div className="user-info">
          <h2>Orlando <span>orlandom@gmail.com</span></h2>
        </div>
        <div className="meeting-status">
          <div className="status-indicator"></div>
          <span>Meeting Completed</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="action-buttons">
          <button>
            Move <i className="fas fa-angle-down"></i>
          </button>
          <button>
            <i className="fas fa-ellipsis"></i>
          </button>
        </div>
        
      </div>
      <hr></hr>
      <span className='today'>Today</span><hr className='horizantal-line'></hr>
      
      {/* Reply Button Container */}
      <div className="reply-button-container">
        <button className="reply-button" onClick={toggleReplyPopup}>
          <i className="fas fa-reply"></i> Reply
        </button>
      </div>

      {/* Email content */}
      <div className="email-content">
        <div className="email-header">
          <div className="email-header-left">
            <h3>New Product Launch</h3>
            <p><span>From:</span> jeanne@icloud.com <span>CC:</span> lennon.j@mail.com</p>
            <p><span>To:</span> lennon.j@mail.com</p>
          </div>
          <div className="email-header-right">
            <p className="email-date">20 June 2022 : 9:16AM</p>
          </div>
        </div>
        <div className="email-body">
          <p>Hi {'{FIRST_NAME}'},</p>
          <p>
            I would like to introduce you to SaaSgrow, a productized design service
            specifically tailored for SaaS startups. Our aim is to help you enhance the user
            experience and boost the visual appeal of your software products.
          </p>
          
        </div>
      </div>
      <div className="email-content">
        <div className="email-header">
          <div className="email-header-left">
            <h3>New Product Launch</h3>
            <p><span>From:</span> jeanne@icloud.com <span>CC:</span> lennon.j@mail.com</p>
            <p><span>To:</span> lennon.j@mail.com</p>
          </div>
          <div className="email-header-right">
            <p className="email-date">20 June 2022 : 9:16AM</p>
          </div>
        </div>
        <div className="email-body">
          <p>Hi {'{FIRST_NAME}'},</p>
          <p>
            I would like to introduce you to SaaSgrow, a productized design service
            specifically tailored for SaaS startups. Our aim is to help you enhance the user
            experience and boost the visual appeal of your software products.
          </p>
          
        </div>
      </div>
      <div className="email-content">
        <div className="email-header">
          <div className="email-header-left">
            <h3>New Product Launch</h3>
            <p><span>From:</span> jeanne@icloud.com <span>CC:</span> lennon.j@mail.com</p>
            <p><span>To:</span> lennon.j@mail.com</p>
          </div>
          <div className="email-header-right">
            <p className="email-date">20 June 2022 : 9:16AM</p>
          </div>
        </div>
        <div className="email-body">
          <p>Hi {'{FIRST_NAME}'},</p>
          <p>
            I would like to introduce you to SaaSgrow, a productized design service
            specifically tailored for SaaS startups. Our aim is to help you enhance the user
            experience and boost the visual appeal of your software products.
          </p>
          
        </div>
      </div>

      {showReplyPopup && (
        <ReplyPopup isVisible={showReplyPopup} onClose={toggleReplyPopup} />
      )}
    </div>
  );
};

const LeadDetailsSidebar = () => {
  return (
    <div className="lead-details-sidebar">
      <div className="section lead-details">
        <h2>Lead Details</h2>
        <div className="detail-row">
          <span className="label">Name</span>
          <span className="value">Orlando</span>
        </div>
        <div className="detail-row">
          <span className="label">Contact No</span>
          <span className="value">+54-9062827869</span>
        </div>
        <div className="detail-row">
          <span className="label">Email ID</span>
          <span className="value">orlando@gmail.com</span>
        </div>
        <div className="detail-row">
          <span className="label">LinkedIn</span>
          <span className="value">linkedin.com/in/timvdade/</span>
        </div>
        <div className="detail-row">
          <span className="label">Company Name</span>
          <span className="value">Reachinbox</span>
        </div>
      </div>
      
      <div className="section activities">
        <h2>Activities</h2>
        <div className="campaign">
          <h3>Campaign Name</h3>
          <p className="campaign-meta">3 Steps | 5 Days in Sequence</p>
          <ul className="campaign-steps">
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
                <div className="vertical-line"></div>
              </div>
              <div className="step-content">
                <span className="step-text">Step 1: Email</span>
                <span className="step-status">
                  <Send className="status-icon" size={12} /> Sent 3rd, Feb
                </span>
              </div>
            </li>
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
                <div className="vertical-line"></div>
              </div>
              <div className="step-content">
                <span className="step-text">Step 2: Email</span>
                <span className="step-status">
                <Mail className="status-icon" size={12} /> Opened 5th, Feb
                </span>
              </div>
            </li>
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
              </div>
              <div className="step-content">
                <span className="step-text">Step 3: Email</span>
                <span className="step-status">
                  <Mail className="status-icon" size={12} /> Opened 5th, Feb
                </span>
              </div>
            </li>
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
              </div>
              <div className="step-content">
                <span className="step-text">Step 4: Email</span>
                <span className="step-status">
                  <Mail className="status-icon" size={12} /> Opened 5th, Feb
                </span>
              </div>
            </li>
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
              </div>
              <div className="step-content">
                <span className="step-text">Step 5: Email</span>
                <span className="step-status">
                  <Mail className="status-icon" size={12} /> Opened 5th, Feb
                </span>
              </div>
            </li>
            <li>
              <div className="step-icon-container">
                <Mail className="icon email-icon" />
              </div>
              <div className="step-content">
                <span className="step-text">Step 6: Email</span>
                <span className="step-status">
                  <Mail className="status-icon" size={12} /> Opened 5th, Feb
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


const ReplyPopup = ({ isVisible, onClose, threadId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentThreadId, setCurrentThreadId] = useState(null);

  if (!isVisible) return null;

  const handleSend = async () => {
    const to = document.getElementById('toField').value;
    const from = document.getElementById('fromField').value;
    const subject = document.getElementById('subjectField').value;
    const messageBody = document.getElementById('messageBody').value;

    const emailData = {
      to,
      from,
      subject,
      body: `<html>${messageBody}</html>` // Wrapping the message body in HTML tags
    };

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`/reply/${threadId}`, emailData);
      console.log('Reply sent successfully:', response.data);
      onClose();
    } catch (err) {
      console.error('Error sending reply:', err);
      setError('Failed to send reply. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const openReplyPopup = (threadId) => {
    setCurrentThreadId(threadId);
    setPopupVisible(true);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Reply</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="email-form">
          <div className="form-field">
            <label>To:</label>
            <input type="email" id="toField" readOnly value="jeanne@icloud.com" />
          </div>
          <div className="form-field">
            <label>From:</label>
            <input type="email" id="fromField" readOnly value="your@email.com" />
          </div>
          <div className="form-field">
            <label>Subject:</label>
            <input type="text" id="subjectField" defaultValue="Re: New Product Launch" />
          </div>
          <textarea id="messageBody" rows="10" placeholder="Hi Jeanne.."></textarea>
        </div>
        <div className="popup-footer">
          <button 
            id="sendButton" 
            className="send-button" 
            onClick={handleSend} 
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
          {error && <p className="error-message">{error}</p>}
          <div className="additional-options">
             <div className="additional-options">             
              <button className="option-button"><i className="fa-solid fa-bolt"></i> Variables</button> 
              <button className="option-button"><i className="fa-regular fa-eye"></i> Preview Email</button>             
              <button className="option-button"><i className="fa-solid fa-a"></i><i className="fa-solid fa-ellipsis-vertical"></i></button>             
              <button className="option-button"><i className="fa-solid fa-link"></i></button>             
              <button className="option-button"><i className="fa-regular fa-face-smile"></i></button>             
              <button className="option-button"><i className="fa-regular fa-user"></i></button>             
              <button className="option-button"><i className="fa-solid fa-code"></i></button>           
              </div> 
          </div>
        </div>
      </div>
      <ReplyPopup 
  isVisible={popupVisible} 
  onClose={() => setPopupVisible(false)} 
  threadId={2} 
/>
    </div>
  );
};

const DeletePopup = ({ isVisible, onClose, onDelete }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Are you sure?</h2>
        </div>
        <div className="popup-body">
          <p>Your selected email will be deleted.</p>
        </div>
        <div className="popup-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className='delete-button'>Delete Email</button>
        </div>
      </div>
    </div>
  );
};
const EmailApp = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [inboxData, setInboxData] = useState([
     {
      "id": 3,
      "fromName": "Shaw Adley",
      "fromEmail": "shaw@getmemeetings.com",
      "toName": "",
      "toEmail": "mitrajit2022@gmail.com",
      "cc": null,
      "bcc": null,
      "threadId": 1,
      "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      "subject": "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      "body": "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      "isRead": true,
      "folder": "INBOX",
      "uid": 594,
      "sentAt": "2023-11-23T04:08:45.000Z",
      "archivedAt": null,
      "createdAt": "2023-11-23T07:38:46.000Z",
      "updatedAt": "2023-11-23T07:38:46.000Z",
      "deletedAt": null
    },
  ]); // Your inbox data source

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
  };

  const refreshInbox = () => {
    // Function to refresh inbox data
  };

  return (
    <div className="email-app">
      <InboxContent 
        inboxData={inboxData} 
        refreshInbox={refreshInbox} 
        onEmailSelect={handleEmailSelect}
      />
      <EmailViewer 
        email={selectedEmail}
        onReplyToggle={() => {/* handle reply toggle */}}
      />
    </div>
  );
};
export default OneboxPage;