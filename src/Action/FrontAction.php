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

namespace Applicant\Action;

use Applicant\Helper\AssetHelper;
use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\HtmlResponse;

/**
 * Api action.
 */
class FrontAction implements MiddlewareInterface
{
    /**
     * @var AssetHelper
     */
    private $assetHelper;

    public function __construct(AssetHelper $assetHelper)
    {
        $this->assetHelper = $assetHelper;
    }

    public function process(Request $request, DelegateInterface $delegate): HtmlResponse
    {
        $mainCss = $this->assetHelper->getAssetUrl('app.css');
        $mainJs = $this->assetHelper->getAssetUrl('main.js');

        return new HtmlResponse('
            <!DOCTYPE html>
            <html lang="fr">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <meta name="description" content="">
                    <title>Applicant Certificationy</title>
                    <link href="'.$mainCss.'" rel="stylesheet">
                </head>
                <body>
                    <div id="app"></div>
                    <script src="'.$mainJs.'"></script>
                </body>
            </html>

        ');
    }
}
