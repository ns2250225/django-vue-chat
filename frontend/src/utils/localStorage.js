import Cookies from 'js-cookie'

const UserName = 'Admin'

export function getUserName () {
  return Cookies.get(UserName)
}

export function setUserName (name) {
  return Cookies.set(UserName, name)
}

export function removeUserName () {
  return Cookies.remove(UserName)
}
