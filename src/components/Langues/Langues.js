import "./Langues.css";

function Langues() {
    return (
        <div className='langues'>
            <div className="langue">
                <p className="title">I speak...</p>
                <p className="langue-nom">Francais</p>
                <div className="progress-bar francais"></div>
            </div>
            <div className="langue">
                <p className="langue-nom">Anglais</p>
                <div className="progress-bar anglais"></div>
            </div>
            <div className="langue">
                <p className="langue-nom">Allemand</p>
                <div className="progress-bar allemand"></div>
            </div>
            <div className="langue">
                <p className="langue-nom">Arabe</p>
                <div className="progress-bar arabe"></div>
            </div>
        </div>
    )
}

export default Langues