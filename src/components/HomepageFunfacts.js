import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/templatemo.css';

function HomepageFunfacts() {
    return(

        <div className="container">
            <div className="fun-facts">
                <div className="row">

                    {/* 4:3 aspect ratio  */}
                    <div className="w-40 m-5 embed-responsive embed-responsive-4by3  ">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cMRi7oy4BEE"></iframe>
                    </div>

                    {/* 1:1 aspect ratio */}
                    <div className="w-40 m-5 embed-responsive embed-responsive-4by3">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Z_01ofss72g"></iframe>
                    </div>
                </div>
                <div class="row">

                    {/* 4:3 aspect ratio  */}
                    <div className="w-40 m-5 embed-responsive embed-responsive-4by3">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/welt5Qvs88k"></iframe>
                    </div>

                    {/* 1:1 aspect ratio  */}
                    <div className="w-40 m-5 embed-responsive embed-responsive-4by3">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/9ktsaBeDfNE"></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default HomepageFunfacts;