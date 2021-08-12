!macro customInstall
  ${StdUtils.InvokeShellVerb} $0 $INSTDIR "${APP_FILENAME}.exe" ${StdUtils.Const.ShellVerb.PinToTaskbar}
!macroend