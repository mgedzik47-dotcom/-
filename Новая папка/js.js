$(document).ready(function () {
  if (localStorage.getItem('notesHTML')) {
    $('#notes').html(localStorage.getItem('notesHTML'));
  }
  $("#addtolist").click(function () {
    let title = $('#title').val(),
      content = $('#content').val();
    if (!title && !content) {
      alertify.error('Место пустое');
      return;
    }
    if (!content) {
      alertify.error('у вас пустое описание');
      return;
    }
    if (!title) {
      alertify.error('у ваc пустое название');
      return;
    }
    $('#notes').append('<div class="note"><h1 class="title" contenteditable="true">' + title + '</h1><p class="content" contenteditable="true">' + content + '</p><p class="data">' + new Date().toLocaleString() + '</p><div class="controls"><button class="archive">Archive</button><button class="remove">Remove</button></div></div>');
    $('#title').val('');
    $('#content').val('');
    localStorage.setItem('notesHTML', $('#notes').html());
  });

  $(document).on('click', '.archive', function () {
    let note = $(this).closest('.note');
    note.toggleClass('archived');
    note.css('background-color', note.hasClass('archived') ? 'rgba(0, 0, 0, 0.54)' : '');
    note.find('.title, .content').attr('contenteditable', function () {
      return $(this).attr('contenteditable') == 'true' ? 'false' : 'true';
    });
    localStorage.setItem('notesHTML', $('#notes').html());
  });

  $(document).on('click', '.remove', function () {
    let note = $(this).closest('.note');
    if (!note.hasClass('archived')) {
      if (confirm('Вы уверены, что хотите удалить эту заметку?')) {
        note.remove();
        localStorage.setItem('notesHTML', $('#notes').html());
      }
    }
  });

});
$('#removeAll').on('click', function () {
  if (confirm('ПРЕДУПРЕЖДЕНИЕ! вы удалите все заметки кроме архивированых. Вы уверени что хотите их удалить?')) {
    $('.note').not('.archived').remove()
    localStorage.setItem('notesHTML', $('#notes').html());
  }
});

