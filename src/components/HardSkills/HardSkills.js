import "./HardSkills.css";
import react from '../../assets/languagesIcons/react.png';
import angular from '../../assets/languagesIcons/angular.png';
import postgreesql from '../../assets/languagesIcons/postgreesql.png';
import express from '../../assets/languagesIcons/express.png';
import sequelize from '../../assets/languagesIcons/sequelize.png';
import prisma from '../../assets/languagesIcons/prisma.png';
import c from '../../assets/languagesIcons/C_Logo.png';
import cc from '../../assets/languagesIcons/c++.png';
import java from '../../assets/languagesIcons/java.png';
import Javascript from '../../assets/languagesIcons/javascript.png';
import Typescript from '../../assets/languagesIcons/typescript.png';
import python from '../../assets/languagesIcons/python.png';
import swift from '../../assets/languagesIcons/swift.png';
import nodejs from '../../assets/languagesIcons/node.png';
import sql from '../../assets/languagesIcons/sql.png';
import mongo from '../../assets/languagesIcons/mogon.png';
import mysql from '../../assets/languagesIcons/mysql.png';

function Competences() {
    return (
        <div className="competences">
            <div className="hard-skills">
                <div className="Languages-code">
                    <h2>Languages</h2>
                    <div className="swift">
                        <img src={swift} />
                    </div>
                    <div className="c">
                        <img src={c} />
                    </div>
                    <div className="c++">
                        <img src={cc} />
                    </div>
                    <div className="Java">
                        <img src={java} />
                    </div>
                    <div className="Javascript">
                        <img src={Javascript} />
                    </div>
                    <div className="Python">
                        <img src={python} />
                    </div>
                    <div className="Typescript">
                        <img src={Typescript} />
                    </div>
                </div>
            </div>
            <h2>Database skills</h2>
            <div className="Database">
                
                <div className="SQL">
                    <img src={sql} />
                </div>
                <div className="MongoDB">
                    <img src={mongo} />
                </div>
                <div className="PostgreSQL">
                    <img src={postgreesql} />
                </div>
                <div className="Prisma">
                    <img src={prisma} />
                </div>
                <div className="Sequelize">
                    <img src={sequelize} />
                </div>
            </div>
            <h2>Framework</h2>

            <div className="Framework">

                <div className="React">
                    <img src={react} />
                </div>
                <div className="Express">
                    <img src={express} />
                </div>
                <div className="NodeJS">
                    <img src={nodejs} />
                </div>
                <div className="Angular">
                    <img src={angular} />
                </div>
            </div>
        </div>
    )
}

export default Competences;