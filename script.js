$(document).ready(function() {
    // console.log("Hello");

    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('img/src', this.src);
        e.dataTransfer.setData('img/alt', this.alt);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {
            dragSrcEl.src = this.src;
            this.src = e.dataTransfer.getData('img/src');
            dragSrcEl.alt = this.alt;
            this.alt = e.dataTransfer.getData('img/alt');
        }

        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function(item) {
            item.classList.remove('over');
        });
    }




    let items = document.querySelectorAll('.card-body img');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });


});

function generateResult() {
    var arr = new Array;
    $("#list").text('');
    let items = document.querySelectorAll('.card-body img');
    items.forEach(function(item, i) {
        $("#list").append("<tr><td>" + item.alt + "</td></tr>");
        arr[i] = item.alt;
    });
    console.log(arr);
}