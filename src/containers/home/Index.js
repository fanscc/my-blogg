import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoAction from '../../actions/home';
import Index from '../../components/home/Index';

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        userInfoAction: bindActionCreators(userInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);



