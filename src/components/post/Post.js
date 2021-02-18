import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import InputOption from '../input/InputOption'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'

const Post = forwardRef(({ key, name, description, message, photoUrl }, ref ) => {
    return (
        <div key={key} ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="post__body">
                    <p>{message}</p>
                </div>
                <div className="post__buttons">
                    <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                    <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                    <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                    <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
                </div>
            </div>
        </div>
    )
})

export default Post
