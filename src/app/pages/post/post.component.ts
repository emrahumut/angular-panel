import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { PostsService } from 'src/app/services/posts.service';



@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

    dataSource = [
        { username: "TEST USERNAME POST", title: "test title", body: "test body" },
        { username: "TEST 22 USERNAME POST", title: "test 44 title", body: "test bodasdasdy" },
        { username: "TEST 333 USERNAME POST", title: "test 44 title", body: "testasdsa body" },
        { username: "TEST 4444 USERNAME POST", title: "test  444 title", body: "testsadasas body" }
    ];

    columnData = [
        { title: 'Username', column: 'username' },
        { title: 'Title', column: 'title' },
        { title: 'Body', column: 'body' }
    ];
    displayedColumns: string[] = this.columnData.map(col => col.column);

    constructor(
        private postsService: PostsService,
    ) { }

    ngOnInit() {
        this.postsService.getPosts().subscribe(data => {
            console.log(data);
        })
    }
}