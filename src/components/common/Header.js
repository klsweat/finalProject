import React from 'react'
import { Link } from 'react-router'

const HeaderInfo = () => (
  <span>
    <div className='d-flex mr-auto'>
    </div>
    <ul className='navbar-nav content-right'>
      <li className='align-self-center hidden-md-down'>
        <span href='https://themeforest.net/item/adminux-dashboard-responsive-html/19761213?ref=Maxartkiller' className='btn btn-sm btn-primary mr-2'><span className='fa fa-shopping-basket '></span>      Buy Now!</span>
      </li>
      <li className='v-devider'></li>
      <li className='nav-item active'>
        <button
          className='btn btn-link icon-header '
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          <span className='fa fa-envelope-o'></span> <span className='badge-number bg-success'></span>
        </button>
        <div className='dropdown-menu message-container'>
          <div className='list-unstyled'>
            <span href='#' className='media'><span className='message_userpic'><img className='d-flex' src='../img/user-header.png' alt='Generic user image' /></span>
            <div className='media-body'>
              <h6 className='mt-0 mb-1'>Dhananjay Chauhan</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </div>
            </span> <span href='#' className='media'><span className='message_userpic'><img className='d-flex' src='../img/user-header.png' alt='Generic user image' /></span>
            <div className='media-body'>
              <h6 className='mt-0 mb-1'>Max Smith</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </div>
            </span> <span href='#' className='media'><span className='message_userpic'><img className='d-flex' src='../img/user-header.png' alt='Generic user image' /></span>
            <div className='media-body'>
              <h6 className='mt-0 mb-1'>Astha Smith</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </div>
            </span> <span href='#' className='media'><span className='message_userpic'><img className='d-flex' src='../img/user-header.png' alt='Generic user image' /></span>
            <div className='media-body'>
              <h6 className='mt-0 mb-1'>Tommy Cruszii</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </div>
            </span> <span href='#' className='media'><span className='message_userpic'><img className='d-flex' src='../img/user-header.png' alt='Generic user image' /></span>
            <div className='media-body'>
              <h6 className='mt-0 mb-1'>Max Smith</h6> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </div>
            </span>
          </div>
        </div>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link icon-header badgeCircle'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          <span className='fa fa-bell-o'></span><span className='badge-number bg-danger'></span>
        </button>
        <div className='dropdown-menu message-container'>
          <div className='list-unstyled'>
            <div className='media'>
              <span className='alert-block bg-primary'><span className='fa fa-bullhorn'></span></span>
              <div className='media-body'>
                <b>Max Smith</b> updated post of <b>Astha Smith</b>. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </div>
            </div>
            <div className='media'>
              <span className='alert-block bg-warning'><span className='fa fa-bell-o'></span></span>
              <div className='media-body'>
                <b>Max Smith</b> updated post of <b>Astha Smith</b>. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </div>
            </div>
            <div className='media'>
              <span className='alert-block bg-danger'><span className='fa fa-exclamation-triangle'></span></span>
              <div className='media-body'>
                <b>Max Smith</b> updated post of <b>Astha Smith</b>. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </div>
            </div>
            <div className='media'>
              <div className='media-body'>
                <b>Max Smith</b> updated post of <b>Astha Smith</b>. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </div>
            </div>
            <div className='media'>
              <div className='media-body'>
                <b>Max Smith</b> updated post of <b>Astha Smith</b>. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className='nav-item hidden-xs-down'>
        <button
          className='btn btn-link icon-header '
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          <span className='fa fa-th'></span>
        </button>
        <div className='dropdown-menu message-container box-links'>
          <div className='list-unstyled'>
            <span href='?#' className='media'><span className='quick-block '><span className='fa fa-bullhorn'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-bell-o'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-calendar'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-id-card'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-handshake-o'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-camera-retro'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-flask'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-plane'></span></span>
            </span> <span href='?#' className='media'><span className='quick-block '><span className='fa fa-pie-chart'></span></span>
            </span>
          </div>
        </div>
      </li>
      <li className='v-devider'></li>
      <li className='nav-item '>
        <span className='btn btn-link icon-header menu-collapse-right' href='#'><span className='fa fa-podcast'></span></span>
      </li>
    </ul>
    <div className='sidebar-right pull-right '>
      <ul className='navbar-nav  justify-content-end'>
        <li className='nav-item'>
          <button
            className='btn-link btn userprofile'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'>
            <span className='userpic'><img src='../img/user-header.png' alt='user pic'/></span> <span className='text'>Maxartkiller</span>
          </button>
          <div className='dropdown-menu'>
            <span className='dropdown-item' href='customerprofile.html'>Profile</span>
            <span className='dropdown-item' href='#'>Analytics Report</span>
            <div className='dropdown-divider'></div>
            <span className='dropdown-item' href='#'>Setting</span>
          </div>
        </li>
        <li>
          <span href='sign-in2.html' className='btn btn-link icon-header'><span className='fa fa-sign-out'></span></span>
        </li>
      </ul>
    </div>
</span>
)

export default HeaderInfo
