import { Component } from 'angular2/core';
import { Auth } from './auth.service';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about.component';

@Component({
  selector: 'my-app',
  template: `
    <br><br>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="*"><img id="sword" src="/resources/img/sword-icon.png" alt="no img found" /></a>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse-3">
          <ul class="nav navbar-nav">
            <li><a href="#">Avatar: Score</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="divider"><a href="#">Quests</a></li>
            <li><a href="#">ScoreBoard</a></li>
            <li class="divider"><a (click)="auth.login()">Login</a></li>
            <li><a (click)="auth.logout()">Logout</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <div id="dragon"><img src="/resources/img/dragon-animated.gif" alt="no img found" /></div>
    `,
  providers: [ Auth ],
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
  {path: "/about", name: "About", component: AboutComponent}
])
export class AppComponent {
  constructor(private auth: Auth) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
