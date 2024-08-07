import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from 'screens/home/Home';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(undefined, mapDispatchToProps)(Home);
