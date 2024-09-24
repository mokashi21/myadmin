import React from 'react'
import "./Widget.scss"
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';

const Widgets = ({type}) => {

    let data = {
        title: "Unknown",
        isMoney: false,
        link: "No link available",
        icon: null
    };

    const amount = 100;
    const diff = 20;

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{ color : "crimson" ,
                    backgroundColor : "rgba(255,0,0,0.2)"
                }} />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartCheckoutOutlinedIcon className="icon" style={{ color : "goldenrod" ,
                    backgroundColor : "rgba(218,165,32,0.2)"
                }} />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon"
                    style={{ color : "green" ,
                    backgroundColor : "rgba(0,128,0,0.2)"
                }}
                 />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceOutlinedIcon className="icon" 
                style={{ color : "purple" ,
                    backgroundColor : "rgba(128,0,128,0.2)"
                }}
                 />
            };
            break;
        default:
            console.warn(`Unknown widget type: ${type}`);
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardControlKeyOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets;
