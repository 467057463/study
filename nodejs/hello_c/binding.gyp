
{
  'targets': [
    {
      'target_name': 'hello',
      'sources': [
        'src/index.cc',
        'src/say.cc'
      ],
      "include_dirs": [                     
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "libraries": [ 
        
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "defines": ["NAPI_CPP_EXCEPTIONS"],
      "xcode_settings": {
        "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
      }
    }
  ]
} 