  g.setBgColor('#000000');
  g.clear(false);

  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawroundrect/main/drawRoundRect.js');

  g.setColor('#FF0000');
  g.drawRoundRect(20,30, 80,120, 10);

  g.setColor('#00FF00');
  g.drawRoundRect(160,50, 70,80, 20);

  g.setColor('#0000FF');
  g.drawRoundRect(50,140, 130,60, 100);
