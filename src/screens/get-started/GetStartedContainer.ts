import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GetStarted from 'screens/get-started/GetStarted';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(undefined, mapDispatchToProps)(GetStarted);
