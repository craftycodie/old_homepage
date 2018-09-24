import { Component } from 'react'
import { apiHandler } from '../../App'

var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
export default class Konami extends Component {
  constructor (props) {
    super(props)

    this.n = 0
    this.delayId = null
    this.onKeydown = this.onKeydown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeydown)
    this.delayOff()
  }

  delayOff () {
    if (this.delayId) clearTimeout(this.delayId)
  }

  delayOn () {
    this.delayOff()
    this.delayId = setTimeout(() => this.resetN(), 2000)
  }

  resetN (keyCode) {
    if (!keyCode) {
      this.n = 0
      return
    }

    let count = 1
    while (this.n-- > 0 && konami[this.n] === keyCode) { count++ }
    this.n = 0
    while (count-- > 0 && konami[this.n] === keyCode) { this.n++ }
  }

  onKeydown (e) {
    if (e.keyCode === konami[this.n]) {
      this.n++
      this.delayOn()
      if (this.n === konami.length) {
        this.easterEgg()
        this.resetN()
        this.delayOff()
        return false
      }
    } else {
      this.resetN(e.keyCode)
      this.delayOff()
    }
  }

  easterEgg () {
    if (!apiHandler.isUserLogged()) { this.props.history.push('/login') }
  }

  render () {
    return null
  }
}
