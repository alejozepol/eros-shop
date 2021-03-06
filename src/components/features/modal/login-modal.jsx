import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeModal } from '../../../actions';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement( '#root' );

function LoginModal( props ) {
    const { showModal, modal } = props;
    let timer;

    function closeModal() {
        document.getElementById( "login-modal" ).classList.remove( "ReactModal__Content--after-open" );

        timer = setTimeout( () => {
            props.closeModal( 'login' );
        }, 200 );
    }

    useEffect( () => {
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    } )

    return (
        <Modal
            isOpen={ showModal && 'login' === modal }
            onRequestClose={ closeModal }
            style={ customStyles }
            contentLabel="Login Modal"
            className="modal-dialog modal-dialog-centered"
            id="login-modal" >
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ closeModal }>
                        <span aria-hidden="true"><i className="icon-close"></i></span>
                    </button>
                    <div className="form-box">
                        <div className="form-tab">
                            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                <TabList className="nav nav-pills nav-fill">
                                    <Tab className="nav-item">
                                        <span className="nav-link">Inicia sesión </span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link">Registrate</span>
                                    </Tab>
                                </TabList>

                                <div className="tab-content">
                                    <TabPanel style={ { paddingTop: "2rem" } }>
                                        <div>
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email-2">E-mail *</label>
                                                    <input type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="singin-password-2">Contraseña *</label>
                                                    <input type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>Entrar</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                    <Link to="#" className="forgot-link">¿Se te olvido la contraseña?</Link>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">o inicia sesión con</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <Link to="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Google
                                                    </Link>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <Link to="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Facebook
                                                    </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="register-email-2">E-mail*</label>
                                                <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-password-2">Contraseña *</label>
                                                <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                                            </div>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>Registrarme</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                    <label className="custom-control-label" htmlFor="register-policy-2">Acepto las <Link to="#">políticas de privacidad</Link> *</label>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="form-choice">
                                            <p className="text-center">o registrate con</p>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Link to="#" className="btn btn-login btn-g">
                                                        <i className="icon-google"></i>
                                                        Google
                                                    </Link>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Link to="#" className="btn btn-login  btn-f">
                                                        <i className="icon-facebook-f"></i>
                                                        Facebook
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

function mapStateToProps( state ) {
    return {
        showModal: state.modal.showModal,
        modal: state.modal.modal
    }
}

export default connect( mapStateToProps, { closeModal } )( LoginModal );