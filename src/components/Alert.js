import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div className="container-fluid "> 
      <div key={alert.id} className={`alert alert--${alert.alertType}`}>
        <div className="btn btn-lg"> 
        { alert.msg }
        </div>
        </div>
    </div>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});



export default connect(mapStateToProps)(Alert);