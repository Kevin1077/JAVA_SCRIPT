let username = window.prompt("Enter your name: ");
username = username.replace(/\s+/g, '');
username = username.trim(" ").charAt(0).toUpperCase() + username.trim("   ").slice(1).toLowerCase();
console.log(username);
