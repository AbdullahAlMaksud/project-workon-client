import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const TitleText = ({ props }) => {
    return (
        <Helmet>
            <title>WorkOn | {props}</title>
        </Helmet>
    );
};

export default TitleText;

TitleText.propTypes = {
    mainMenu: PropTypes.string
};