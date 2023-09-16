import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => { return (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => {
      return (
        <li key={id} className={css.item}>
          <span className={css.status} status={isOnline}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    })}
    </ul>); 

};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
