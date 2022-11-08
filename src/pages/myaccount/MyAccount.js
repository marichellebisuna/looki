import { CloudDownloadOutlined, PersonOutlineOutlined, RoomOutlined, ShoppingCartOutlined, Speed } from '@material-ui/icons';
import { DriveFileRenameOutlineOutlined, PaymentsOutlined } from '@mui/icons-material';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Layout from '../../components/layout/Layout';
import './myaccount.scss';
const MyAccount = () => {
  return (
  <Layout>       
      <Breadcrumbs title="my account"/>
      <div className="myaccount">
        <h1>My Account</h1>
      <hr/>
      <div className="container">
        <div className="left">
          <div className="account-item"><Speed /> <span>dashboard</span></div>
          <div className="account-item"><ShoppingCartOutlined /> <span>orders</span></div>
          <div className="account-item"><CloudDownloadOutlined /> <span>download</span></div>
          <div className="account-item"><PaymentsOutlined /> <span>payment method</span></div>
          <div className="account-item"><RoomOutlined /> <span>address</span></div>
          <div className="account-item"><PersonOutlineOutlined /> <span>account details</span></div>
          <div className="account-item"> <span>logout</span></div>
        </div>
        <div className="right">
          <h1>Billing Address</h1>
          <hr/>
          <div className="container">
            <ul>
              <li><span>Alex Tuntuni</span></li>
              <li>1355 Market St, Suite 900</li>
              <li>San Francisco, CA 94103</li>
              <li>Mobile: (123) 456-7890</li>
            </ul>
            <div className="edit">
              <DriveFileRenameOutlineOutlined/> <span>Edit Address</span>
            </div>
          </div> 
        </div>
      </div>
      </div>
      
      
      
 </Layout>
  )
}

export default MyAccount