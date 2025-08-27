function searchRooms() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  if (!checkin || !checkout) {
    alert("Please select check-in and check-out dates!");
    return;
  }

  alert(`Searching rooms from ${checkin} to ${checkout} for ${guests} guest(s).`);
}

