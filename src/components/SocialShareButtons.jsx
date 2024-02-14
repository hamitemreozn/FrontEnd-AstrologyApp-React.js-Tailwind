import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaRedditSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

const SocialShareButtons = ({ url, title }) => {
    return (
        <div className="w-full flex justify-between">
            <a
                href={`https://www.facebook.com/dialog/share?app_id=374113875172838&display=popup&href=${url}`}
                target="blank"
                rel="noreferrer"
            >
                <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
            </a>
            <a
                href={`https://twitter.com/intent/tweet?url=${url}`}
                target="blank"
                rel="noreferrer"
            >
                <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
            </a>
            <a href="/" target="blank" rel="noreferrer">
                <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
            </a>
            <a
                href={`https://api.whatsapp.com/send/?text=${url}`}
                target="blank"
                rel="noreferrer"
            >
                <FaWhatsappSquare className="text-[#25D366] w-12 h-auto" />
            </a>
        </div>
    );
};

export default SocialShareButtons;
