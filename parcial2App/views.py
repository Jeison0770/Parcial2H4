from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

# Vista para obtener y crear tareas (sin autenticación)
@api_view(['GET', 'POST'])
def tasks_view(request):
    if request.method == 'GET':
        tasks = Task.objects.all()  # Se obtienen todas las tareas
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        title = request.data.get('title')
        task = Task.objects.create(title=title, completed=False)
        serializer = TaskSerializer(task)
        return Response(serializer.data, status=201)
class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer