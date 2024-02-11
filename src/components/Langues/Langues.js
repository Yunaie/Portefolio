import "./Langues.css";

function Langues() {
    return (
        <div class='langues'>
            <div class="langue">
                <p class="langue-nom">Francais</p>
                <div class="progress-bar francais"></div>
            </div>
            <div class="langue">
                <p class="langue-nom">Anglais</p>
                <div class="progress-bar anglais"></div>
            </div>
            <div class="langue">
                <p class="langue-nom">Allemand</p>
                <div class="progress-bar allemand"></div>
            </div>
            <div class="langue">
                <p class="langue-nom">Arabe</p>
                <div class="progress-bar arabe"></div>
            </div>
        </div>
    )
}

export default Langues