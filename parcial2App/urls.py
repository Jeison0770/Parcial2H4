from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.tasks_view, name='tasks'),
    path('tasks/<int:pk>/', views.TaskDetailView.as_view(), name='task-detail'),
]
