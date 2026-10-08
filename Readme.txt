Little Lemon Web Application

API routes for testing:

1  /
2  /restaurant/
3  /restaurant/menu/
4  /restaurant/menu/<id>
5  /restaurant/booking/tables/
6  /api/menu-items/
7  /api/menu-items/<id>
8  /api/bookings/
9  /auth/users/
10 /auth/token/login/
11 /api-token-auth/

Test instructions:
1. Static HTML Content:
Access http://127.0.0.1:8000/ or http://127.0.0.1:8000/restaurant/ to view the website with static content.

2. User Registration and Authentication:
Use POST http://127.0.0.1:8000/auth/users/ with username, email, and password to register a new user.
Use POST http://127.0.0.1:8000/auth/token/login/ with username and password to get an auth token.
Alternatively, use POST http://127.0.0.1:8000/api-token-auth/ with username and password to get a token.

3. Menu API:
Use GET http://127.0.0.1:8000/api/menu-items/ or GET http://127.0.0.1:8000/restaurant/menu/ to view menu items.
Use POST http://127.0.0.1:8000/api/menu-items/ with title, price, and inventory to add a menu item.
Use GET, PUT, or DELETE on http://127.0.0.1:8000/api/menu-items/1 to retrieve, update, or delete an item.

4. Table Booking API:
Include the header 'Authorization: Token <your_token>' in Insomnia.
Use GET http://127.0.0.1:8000/api/bookings/ or GET http://127.0.0.1:8000/restaurant/booking/tables/ to view bookings.
Use POST http://127.0.0.1:8000/api/bookings/ or POST http://127.0.0.1:8000/restaurant/booking/tables/ with name, no_of_guests, and booking_date to create a reservation.

5. Unit Tests:
Run 'python manage.py test' to execute all unit tests.
