/* import img */
import PRROFILE_IMAGE from './ProfilePicture2.jpg';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './Profile.css';

function Programing() {
    return (
        <div>
            <div className='profileTitle'>Profile</div>
            <div className='profileSubtitle'>ープロフィールー</div>
            <br />
            <br />
            <div className="ProfileContents">
                <div className="ProfilePicture">
                    <img src={PRROFILE_IMAGE} alt="Logo" />
                </div>
                <div className="ProfileDiscription">
                    <p>
                        <font face="BIZ UDP明朝 Medium">芹澤尚舜(Masatoshi SERIZAWA)
                            <br /><br />
                            Master of Computer Science
                            <br /><br />
                            '01 📍Tokyo
                        </font>
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Programing;
