var e='Characters: \r\n - Foo (bar, bar2, bar3) display=!Foo index=1\r\n - foo2 (bar, bar2) display=我 index=2\r\n\r\nMacros: \r\n - bar (Foo, foo2) foo\r\n - bar2 (foo2) foo=true\r\n - pipe (foo2) foo=true\r\n\r\nHello: Bar!\r\n---\r\n/**\r\n  aaa\r\n*/\r\n// 123\r\naaa\r\n[@Foo]bbbbar\r\n\r\n|let foo = 1, bar = 2\r\n\r\n@Foo (bar)[bar|bar]\r\n(foo:bar)\r\nfoo[bar](bar foo)\r\n  \r\n// continue\r\n[bar foo=foo bar="bar]foo" foo]\r\n// end\r\n\r\n|if bar > 0\r\n\r\nbarbarbar\r\n\r\n|elseif bar == 2\r\n// call elseif bar == 2\r\n\r\n|elseif bar == 3\r\n// call elseif bar == 3\r\n\r\n|else\r\n// call else\r\n\r\n|end\r\n\r\n// action\r\n\r\n   @Foo (bar)[pipe foo=2]\r\n   对话中的前导空格将被忽略\r\n     \r\n   测试\r\n\r\n   \r\n      action则例外\r\n\r\n|let app = 1\r\n\r\n> centered {{app}} <\r\n> *centered* <\r\n   *> centered <*\r\n\r\n@foo2\r\n> centered {{app}} <\r\n>* centered *<\r\n*> centered <*\r\n// >app\r\n\r\n// app\r\n\r\n> App\r\n> app2\r\n\r\ntest[[comment]]in*line**bold{{"template" | pipe}}con[label](pipe)tent***aft|pipe\r\ntest[[comment]]in*line**bold{{"template" | pipe}}con[label](pipe)tent**aft|pipe\r\ntest[[comment]]in*line**bold{{"template" | pipe}}con[label](pipe)tent*aft|pipe\r\ntest[[comment]]in*line**bold{{"template" | pipe}}con[label](pipe)tentaft|pipe\r\ntest[[comment]]in*line**bold{{"template" | pipe}}con[label](pipe)tentaft*|pipe\r\n\r\n===\r\n\r\ntest[[comment]]in*line**bo_ld{{"template" | pipe}}con>0 [label](pipe) <te_nt***aft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>1 [[label]](pipe) <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>2 \\[[label]](pipe) <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>3 [\\[label]](pipe) <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>32 [\\[label\\]]() <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>33[\\[label](pipe foo=1) <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"template" | pipe}}con>4 [\\[label\\]](pipe) <tentaft*|pipe\r\ntest[[comment]]in*line**bo*ld{{"tem}}plate" | pipe}}con>5 [\\[label]]\\(pipe) <tentaft*|pipe\r\n\r\n';export{e as default};