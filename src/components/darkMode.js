import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

class ThemeSwitchButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: this.props.darkmode,
    }
  }

  componentDidMount() {
    const _this = this
    let darkMode = localStorage.getItem('darkMode')

    document.body.className = _this.state.darkMode ? 'dark-mode' : ''
    if (darkMode) {
      this.setState(
        {
          darkMode: darkMode === 'true',
        },
        () => {
          document.body.className = _this.state.darkMode ? 'dark-mode' : ''
        }
      )
    }

    this.switchBtn.addEventListener('click', function() {
      _this.setState({
        darkMode: !_this.state.darkMode,
      })
      localStorage.setItem('darkMode', _this.state.darkMode)

      document.body.className = _this.state.darkMode ? 'dark-mode' : ''
    })
  }
  render() {
    return (
      <React.Fragment>
        <li className="switch-theme">
          <div className="switch-button" ref={c => (this.switchBtn = c)}>
            <div
              title="Switch to Dark Mode"
              data-switch-to="dark"
              className={!this.state.darkMode ? 'active' : ''}
            >
              <IoIosSunny />
            </div>
            <div
              title="Switch to Light Mode"
              data-switch-to="light"
              className={this.state.darkMode ? 'active' : ''}
            >
              <IoIosMoon />
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}
export default function() {
  const data = useStaticQuery(graphql`
    query DarkModeQuery {
      site {
        siteMetadata {
          darkmode
          switchTheme
        }
      }
    }
  `)

  return (
    <ThemeSwitchButton
      key="themeswitcher"
      darkmode={data.site.siteMetadata.darkmode}
    />
  )
}
