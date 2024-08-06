import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Premium from 'screens/premium/Premium';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(undefined, mapDispatchToProps)(Premium);
