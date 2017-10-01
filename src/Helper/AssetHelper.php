<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Helper;

/**
 * Asset helper.
 */
class AssetHelper
{
    /**
     * @var string
     */
    private $manifestFile;

    /**
     * @var string
     */
    private $publicPath;

    /**
     * @param string      $manifestFile
     * @param string|null $publicPath
     */
    public function __construct($manifestFile, $publicPath = null)
    {
        $this->manifestFile = $manifestFile;
        $this->publicPath = $publicPath;
    }

    /**
     * Get asset from manifest.
     *
     * @param string $filename
     *
     * @return string
     */
    public function getAssetUrl($filename)
    {
        if (!file_exists($this->manifestFile)) {
            return sprintf('%s%s', $this->publicPath, $filename);
        }

        $manifest = json_decode(file_get_contents($this->manifestFile), true);

        if (array_key_exists($filename, $manifest)) {
            return sprintf('%s%s', $this->publicPath, $manifest[$filename]);
        }

        return sprintf('%s%s', $this->publicPath, $filename);
    }

}
