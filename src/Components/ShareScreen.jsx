import React, { useState } from 'react';
import './ShareScreen.css';

function ShareScreen() {
    const [email, setEmail] = useState('');

    // the current url
    const url = window.location.href;

    const shareUrl = async () => {
        try {
            const response = await axios.post(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/share?destination_email=${email}&content_url=${url}`)
        } catch (error) {
            console.log(error);
        }
    }

    // clean the input after sharing
    const handleShare = (e) => {
        e.preventDefault();
        shareUrl();
        setEmail('');
    }

    const handleChangeShare = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    
  return (
    <>
        <form className='share-form' onSubmit={handleShare}>
            <button className='button-share' type='submit'>Share</button>
            <input className='input-share' type="email" value={email} onChange={handleChangeShare} placeholder='Enter email' />
        </form>
    </>
  )
}

export default ShareScreen;