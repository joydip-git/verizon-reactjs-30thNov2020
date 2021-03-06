import React, { memo } from 'react'
import PropTypes from 'prop-types'
import withError from './withError';

/*
const Hero = ({ heroName }) => {
    let design = null;
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a hero')
        }
        design = (
            <div>
                Hero Name:&nbsp;{heroName}
            </div>
        )
    }
    catch (e) {
        design = <span>Error occurred...</span>
    }

    return design;
}
*/
const Hero = ({ heroName }) => {
    if (heroName === 'Joker') {
        throw new Error('Not a hero')
    }

    return (
        <div>
            Hero Name:&nbsp;{heroName}
        </div>
    );
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default withError(memo(Hero), (errorData) => console.log(errorData));
//export default Hero;
