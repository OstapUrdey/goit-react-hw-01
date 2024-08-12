import css from "./FriendListItem.module.css"

export default function FriendListItem ({avatar, name, isOnline}) {
    return (
        <div className={css.friendListItem}>
            <div className={css.friendCard}>
                <img src={avatar} alt="Avatar" width="48" />
                <p>{name}</p>
                <p style={{ color: isOnline ? 'green' : 'red' }}>
            {isOnline ? "Online" : "Offline"}
                </p>
            </div>
        </div>
    );
};