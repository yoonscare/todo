// DOM 요소 선택
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const addButton = document.querySelector('.add-btn');

// 할 일 추가 함수
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText) {
        // 새로운 할 일 항목 생성
        const todoItem = document.createElement('li');
        todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        // 할 일 텍스트와 체크박스를 포함할 div
        const contentDiv = document.createElement('div');
        contentDiv.className = 'd-flex align-items-center';
        
        // 체크박스 생성
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input me-2';
        
        // 할 일 텍스트
        const todoContent = document.createElement('span');
        todoContent.textContent = todoText;
        todoContent.className = 'ms-2';
        
        // 삭제 버튼 (처음에는 숨김)
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerHTML = '삭제';
        deleteBtn.style.display = 'none';
        
        // 요소들 조립
        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(todoContent);
        todoItem.appendChild(contentDiv);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        
        // 입력창 초기화
        todoInput.value = '';
        
        // 체크박스 이벤트
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // 체크되면 취소선 추가하고 삭제 버튼 표시
                todoContent.style.textDecoration = 'line-through';
                deleteBtn.style.display = 'block';
            } else {
                // 체크 해제되면 취소선 제거하고 삭제 버튼 숨김
                todoContent.style.textDecoration = 'none';
                deleteBtn.style.display = 'none';
            }
        });
        
        // 삭제 버튼 이벤트
        deleteBtn.addEventListener('click', function() {
            if (confirm('정말 이 할 일을 삭제하시겠습니까?')) {
                todoList.removeChild(todoItem);
            }
        });
    } else {
        alert('할 일을 입력해주세요!');
    }
}

// 이벤트 리스너 등록
addButton.addEventListener('click', addTodo);

// Enter 키로도 추가 가능하게
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
