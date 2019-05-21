import React from 'react';
import PropTypes from 'prop-types';
import ProfileFlipWrapper from './style';

const ProfileFlip = ({ front, back, details }) => (
    <ProfileFlipWrapper details={details}>
        <div className="card-flip">
            <div className="front">
                {front}
            </div>
            <div className="back">
                {back}
            </div>
        </div>
    </ProfileFlipWrapper>
);

ProfileFlip.propTypes = {
    front: PropTypes.node.isRequired,
    back: PropTypes.node.isRequired,
    details: PropTypes.bool,
};

ProfileFlip.defaultProps = {
    details: false,
};

export default ProfileFlip;