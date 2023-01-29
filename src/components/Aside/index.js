import './Aside.css';

const Aside = () => {

    return(
        <aside className='menu__lateral'>
            <ul className='menu__lista'>
                <li className='menu__item'>
                    <div className='menu__item-usuario'>
                        <img src='./img/user_log.png' alt='Foto perfil'/>
                        <div className='menu__item--info'>
                            <h2>Usuário Teste</h2>
                            <p>Editar Perfil</p>
                        </div>
                        <img src='./icons/logout.svg' alt='Logout'/>
                    </div>
                </li>
                <li className='menu__item'>
                    <img src='./icons/headset_mic.svg' alt='Suporte STI'/>
                    <h3>Central de Serviços - STI</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/headset_mic.svg' alt='Suporte SEI'/>
                    <h3>Central de Serviços - SEI</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/newspaper.svg' alt='Diário Oficial'/>
                    <h3>Diário Oficial</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/insert_chart.svg' alt='Dados Alagoas'/>
                    <h3>Dados AL</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/email.svg' alt=''/>
                    <h3>Expresso Livre</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/desktop_windows.svg' alt='Facilita'/>
                    <h3>Facilita</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/description.svg' alt='Integra'/>
                    <h3>Integra</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/medical_services.svg' alt='Perícia Médica'/>
                    <h3>Perícia Médica</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/people_outline.svg' alt='Portal de Servidor'/>
                    <h3>Portal do Servidor</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/workspace_premium.svg' alt='Qualidade'/>
                    <h3>Qualidade</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/video_camera_front.svg' alt='Salas de reunião'/>
                    <h3>Salas de reunião</h3>
                </li>
                <li className='menu__item'>
                    <img src='./icons/perm_contact_calendar.svg' alt='Portal SEI'/>
                    <h3>Portal SEI</h3>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;