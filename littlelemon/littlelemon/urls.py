from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from restaurant import views

router = DefaultRouter()
router.register(r'tables', views.BookingViewSet)

api_router = DefaultRouter()
api_router.register(r'bookings', views.BookingViewSet, basename='booking')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('restaurant/', include('restaurant.urls')),
    path('restaurant/menu/', views.MenuItemsView.as_view(), name='restaurant-menu'),
    path('restaurant/menu/<int:pk>', views.SingleMenuItemView.as_view(), name='restaurant-menu-detail'),
    path('restaurant/booking/', include(router.urls)),
    path('api/', include('restaurant.urls')),
    path('api/', include(api_router.urls)),
    path('api-token-auth/', obtain_auth_token),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
