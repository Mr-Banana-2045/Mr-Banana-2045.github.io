
var PROGAMS = {

  help: function(...a) {
    this.printa({
      "headers": ["command", "description"],
      "help": ["commands list"],
      "whoami": ["name"],
      "echo [name]": ["print text"],
      "neofetch": ["system info"],
      "gpt [text]": ["chat gpt online"],
      "date": ["get date / time"],
      "github": ["github we"],
      "alert": ["dialog javascript"],
      "clear": ["clear terminal"],
      "exit": ["exit terminal"]
    });
  },

  whoami: function(...a){
    this.printa("root ~ moz");
  },
  gpt: function(...a){
    fetch('https://5fire.fasttube.ir/ai?text='+a[0])
    .then(response => response.json())
    .then(commits => this.printa("BOT: "+commits.answer));
  },
  date: function(...a){
    this.printa(new Date().toLocaleString());
  },
  echo: function(...a) {
    this.printa(a[0]);
  },
  alert: function(...a){
    alert(a[0]);
  },
  neofetch: function(...a) {
    self.printa('<pre><p style="color:red">─────▀▄───▄▀──────    root@RexJS<br>────▄█▀███▀█▄─────    -----------<br>───█▀███████▀█────    OS: RexJS Linux<br>───█─█▀▀▀▀▀█─█────    Terminal: Root/Bash<br>──────▀▀─▀▀───────    Local: 127.0.0.1</p></pre>');
  },
  github: function(...a){
    this.printa("GITHUB: https://github.com/Mr-Banana-2045");
    window.open("https://github.com/Mr-Banana-2045", "_blank", "width=786, height=786");
  },
  clear: function(...a) {
    this.clear_terminal();
  },
  exit: function(...a){
    window.close();
  }
};
