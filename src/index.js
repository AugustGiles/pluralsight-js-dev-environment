/* eslint-disable no-console */
import './index.css'
import { getUsers, deleteUser } from './api/userApi'

getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`;
  })
  document.getElementById('users').innerHTML = usersBody;

  // NOTE THIS IS NOT WORKING PROPERLY
  const deleteLinks = document.getElementsByClassName('deleteUser');
  Array.from(deleteLinks, link => {
    link.onClick = function(e) {
      e.preventDefault();
      const element = e.target;
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
})
