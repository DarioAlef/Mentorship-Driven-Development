class Tarefa:
    # O __init__ é o "construtor". É aqui que o objeto nasce.
    def __init__(self, titulo: str, descricao: str, status: str = "pendente"):
        # Aqui podemos validar se o nome está vazio
        if not titulo:
            raise ValueError("O titulo não pode ser vazio")
        
        # O 'self' guarda a informação dentro do objeto
        self.titulo = titulo
        self.descricao = descricao
        self.status = status
