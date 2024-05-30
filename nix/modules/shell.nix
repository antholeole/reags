{ inputs, ...}: {
    perSystem = { pkgs, ... }: let 
        deps = (import ../deps.nix) pkgs;
    in {

        
        devenv.shells.default = {
            
          devenv.root =
            let
              devenvRootFileContent = builtins.readFile inputs.devenv-root.outPath;
            in
            pkgs.lib.mkIf (devenvRootFileContent != "") devenvRootFileContent;
            
            name = "reags-shell";
            packages = deps.dev;
        };
    };
}