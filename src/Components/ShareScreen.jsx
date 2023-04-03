import React from 'react'

function ShareScreen() {

    // the current url
    const url = window.location.href;

    const shareUrl = async () => {
        try {
            const response = await axios.post(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/share?destination_email=destination_email&content_url=content_url`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleShare = (e) => {
        e.preventDefault();
        shareUrl();
    }

  return (
    <div>ShareScreen</div>
  )
}

export default ShareScreen