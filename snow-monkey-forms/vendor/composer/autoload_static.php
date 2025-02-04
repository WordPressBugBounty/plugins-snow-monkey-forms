<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit91573c44edbf8bc16f936af651791d4e
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Snow_Monkey\\Plugin\\Forms\\' => 25,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Snow_Monkey\\Plugin\\Forms\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit91573c44edbf8bc16f936af651791d4e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit91573c44edbf8bc16f936af651791d4e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit91573c44edbf8bc16f936af651791d4e::$classMap;

        }, null, ClassLoader::class);
    }
}
