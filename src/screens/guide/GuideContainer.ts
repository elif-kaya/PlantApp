import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Guide from 'screens/guide/Guide';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(undefined, mapDispatchToProps)(Guide);
